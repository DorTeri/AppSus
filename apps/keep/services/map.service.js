
export const mapService = {
    connectGoogleApi
}

function connectGoogleApi() {
    console.log('googleApi')
    if (window.google) return Promise.resolve()
    const MAP_KEY = `AIzaSyD8o3Cd3Npmfar4KdG811Pa-KwoZv9O4Jo`
    var elGoogleApi = document.createElement('script')
    elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=${MAP_KEY}`
    elGoogleApi.async = true
    document.body.append(elGoogleApi)

    return new Promise((resolve, reject) => {
        elGoogleApi.onload = resolve
        elGoogleApi.onerror = () => reject('Google script failed to load')
    })
}