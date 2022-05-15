import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Follow me on <a href="https://twitter.com/kawa_mottyan" target="_blank">Twitter</a> and{' '}
      <a href="https://www.facebook.com/kawamottyan" target="_blank">Facebook</a> {' '}!
      <br></br>
      <a href="https://github.com/kawamottyan/gastby-blog" target="_blank">Report issues</a>
    </div>
  </Container>
)

export default Footer
