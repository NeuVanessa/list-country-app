export const handleStatusBar = (password, setStatus) => {
  let strongPassword = new RegExp(
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
  )
  let mediumPassword = new RegExp(
    '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))'
  )

  if (strongPassword.test(password)) {
    setStatus({
      one: '#00C247',
      two: '#00C247',
      three: '#00C247',
      four: '#00C247',
      feedback: 'feedback-password-strong',
    })
  } else if (mediumPassword.test(password)) {
    setStatus({
      one: '#f76707',
      two: '#f76707',
      three: '#E0E0E0',
      four: '#E0E0E0',
      feedback: 'feedback-password-medium',
    })
  } else if (password === '') {
    setStatus({
      one: '#E0E0E0',
      two: '#E0E0E0',
      three: '#E0E0E0',
      four: '#E0E0E0',
      feedback: ' ',
    })
  } else {
    setStatus({
      one: '#e03131',
      two: '#E0E0E0',
      three: '#E0E0E0',
      four: '#E0E0E0',
      feedback: 'feedback-password-weak',
    })
  }
}
