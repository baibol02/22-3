let walkingDead = {
    name: 'walking dead',
    releaseDate: '31.10.2010' ,
    mainActor: 'Andrew Lincoln',
    minorActors: 'Norman Reedus' + ', ' +
        'Melisa McBride' + ', ' +
        'lauren Cohan' + ', ' +
        'Christian Serratos' + ', ' +
        'Jeffrey Dean Morgan',
    episodes: {
        allEpisodes: 177,
        allSeasons: 11,
        episodesInOneSeason: 16,
    },
}
console.log(walkingDead)

var weekDay = prompt('Какой сегодня день недели ?')

switch (weekDay.toLowerCase()){
    case 'monday':
        console.log('понидельник')
        break
    case 'tuesday':
        console.log('вторник')
        break
    case 'wednesday':
        console.log('среда')
        break
    case 'thursday':
        console.log('четверг')
        break
    case 'friday':
        console.log('пятница')
        break
    case 'saturday':
        console.log('суббота')
        break
    case 'sunday':
        console.log('воскресенье')
        break
}
