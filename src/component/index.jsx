/**
 * @fileoverview
 * @author houquan | houquan@bytedance.com
 * @version 1.0.0 | 2020-03-17 | houquan      // initial version
 */

const React = require('react')
const styles = require('./index.less')
const withStyles = require('isomorphic-style-loader/withStyles')

module.exports = withStyles(styles)(function App() {
  return (
    <div className={styles.container}>Hello, World</div>
  )
})

/* module.exports = function App() {
  return (
    <div className="container">Hello, World</div>
  )
} */
