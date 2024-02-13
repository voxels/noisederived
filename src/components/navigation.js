import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="https://secretatomics.com" className={styles.logoLink}>
      <span className={styles.navigationItem}>Secret Atomics</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Blog
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
