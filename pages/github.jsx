import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user, error }) => {
  // If there's an error, display it
  if (error) {
    return (
      <div className={styles.error}>
        <h2>Error loading GitHub data:</h2>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <div className={styles.user}>
        {user ? (
          <>
            <div>
              <Image
                src={user.avatar_url}
                className={styles.avatar}
                alt={user.login}
                width={50}
                height={50}
              />
              <h3 className={styles.username}>{user.login}</h3>
            </div>
            <div>
              <h3>{user.public_repos} repos</h3>
            </div>
            <div>
              <h3>{user.followers} followers</h3>
            </div>
          </>
        ) : (
          <div>No user data available</div>
        )}
      </div>
      <div className={styles.container}>
        {repos && repos.length > 0 ? (
          repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)
        ) : (
          <div>No repositories found</div>
        )}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    console.log('Environment check:');
    console.log('Username:', process.env.NEXT_PUBLIC_GITHUB_USERNAME);
    console.log('Token first 10 chars:', process.env.GITHUB_TOKEN?.substring(0, 10));
    
    const userRes = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
          'User-Agent': 'node-fetch'
        },
      }
    );
    
    console.log('Response status:', userRes.status);
    const responseText = await userRes.text();
    console.log('Response body:', responseText);
    
    if (!userRes.ok) {
      throw new Error(`User API Error: ${userRes.status} ${responseText}`);
    }
    
    const user = JSON.parse(responseText);

    const repoRes = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`
        },
      }
    );

    if (!repoRes.ok) {
      throw new Error(`Repos API Error: ${repoRes.status} ${await repoRes.text()}`);
    }

    let repos = await repoRes.json();
    
    // First sort by updated_at to get recent repos
    let recentRepos = repos
      .filter(repo => repo.name !== 'LeetCode' && repo.name !== 'Chitresh-code')  // Filter out both repos
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 5);  // Get top 5 instead of 6 to make room for the starred repo

    // Find the most starred repo
    const mostStarredRepo = repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)[0];

    // Combine the repos, adding mostStarredRepo if it's not already in recentRepos
    repos = recentRepos.some(repo => repo.id === mostStarredRepo.id) 
      ? recentRepos 
      : [mostStarredRepo, ...recentRepos.slice(0, 5)];

    return {
      props: { title: 'GitHub', repos, user },
      revalidate: 10,
    };
  } catch (error) {
    // Return the error as a prop instead of throwing it
    return {
      props: {
        title: 'GitHub',
        error: {
          message: error.message,
          stack: error.stack,
        },
        repos: null,
        user: null,
      },
      revalidate: 10,
    };
  }
}

export default GithubPage;