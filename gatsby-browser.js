import "bootstrap/scss/bootstrap.scss"

export const onServiceWorkerUpdateReady = () => {
  if (
    window.confirm(
      `This application has been updated. Reload to display the latest version?`
    )
  ) {
    window.location.reload()
  }
}
