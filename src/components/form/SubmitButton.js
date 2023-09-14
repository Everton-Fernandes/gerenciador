import styles from './SubmitButton.module.css'

function SubmitButton({ text }) {
  return (
    <div className={styles.container_div}>
      <button className={styles.btn}>{text}</button>
    </div>
  )
}

export default SubmitButton