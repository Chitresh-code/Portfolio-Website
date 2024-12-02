import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'chitresh.in',
    href: 'https://chitresh.in',
  },
  {
    social: 'email',
    link: 'gychitresh1290@gmail.com',
    href: 'mailto:gychitresh1290@gmail.com',
  },
  {
    social: 'github',
    link: 'Chitresh-Code',
    href: 'https://github.com/chitresh-code',
  },
  {
    social: 'linkedin',
    link: 'chitresh-gyanani',
    href: 'https://www.linkedin.com/in/chitresh-gyanani/',
  },
  {
    social: 'twitter',
    link: 'chitreshgyanani',
    href: 'https://www.twitter.com/chitreshgyanani',
  },
  {
    social: 'leetcode',
    link: 'chitresh_g',
    href: 'https://leetcode.com/u/chitresh_g/',
  },
  {
    social: 'telegram',
    link: 'gyanani21',
    href: 'https://t.me/gyanani21',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
