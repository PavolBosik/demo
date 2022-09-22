export const getWeatherImage = (summary: string): string => {
    switch (summary) {
        case 'Scorching': {
            return 'https://img.freepik.com/premium-vector/scorching-sun-summer-simple-ray-outline-illustration-image-isolated-white-background_81894-5754.jpg?w=2000'
        }
        case 'Warm': {
            return 'https://c8.alamy.com/comp/JH9AX9/temperature-icon-clip-art-narrow-range-mercury-thermometer-shows-warm-JH9AX9.jpg'
        }
        case 'Cool': {
            return 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem-extra-cool.svg/2048px-Emblem-extra-cool.svg.png'
        }
        case 'Balmy': {
            return 'https://static.lsm.lv/media/2016/02/large/0/5a1t.jpg'
        }
        case 'Mild': {
            return 'https://www.independent.ie/news/92cd8/41584538.ece/AUTOCROP/w1240h700/p8sun.jpg'
        }
        case 'Chilly': {
            return 'https://banner2.cleanpng.com/20200510/jbb/transparent-cartoon-cold-snow-common-cold-weather-5eb7bd6ddacf98.6891192315890998858963.jpg'
        }
        default: {
            return 'https://rightweather.com/wp-content/uploads/2018/07/14-km-EPS-Global-undefined-undefined-360.png'
        }
    }
}
