import styles from '../styles/ArticlesPage.module.css';

const ArticlesPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <div className={styles.iconWrapper}>
          ✍️
        </div>
        <h2 className={styles.title}>Articles Coming Soon!</h2>
        <p className={styles.description}>
          I'm currently crafting some interesting articles about technology, 
          development, and my journey in tech. Stay tuned for insightful content 
          that I'll be sharing here very soon!
        </p>
        <div className={styles.decoration}>
          <span>📝</span>
          <span>💻</span>
          <span>✨</span>
        </div>
      </div>
    </div>
  );
};

export function getStaticProps() {
  return {
    props: { 
      title: 'Articles'
    }
  };
}

export default ArticlesPage;
