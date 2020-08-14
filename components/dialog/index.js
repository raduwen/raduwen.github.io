import classes from './dialog.module.scss'

const dialog = (props) => {
  const cls = [classes.dialog]
  console.log(classes)
  if (props.theme) cls.push(classes[`theme-${props.theme}`])
  console.log(classes[`theme-${props.theme}`])

  return (
    <div className={cls.join(' ')}>
      { props.children }
    </div>
  )
}

export default dialog
