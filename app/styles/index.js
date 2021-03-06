var styles = {
  mainContainer: {
    height: '93%',
    width: '100%'
  },

  mainHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '10px',
    fontFamily: 'Quicksand',
    background: '#f1c40f'
  },

  headerInput: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  homeBg: {
    backgroundImage: 'url("../app/images/102H.jpg")',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    minHeight: '100%'
  },

  forecastParent: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dayDetail: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Quicksand',
    padding: '10px',
    margin: '10px auto 10px auto'
  },

  forecastChild: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '220px',
    height: '280px',
    border: '2px',
    borderStyle: 'dashed',
    borderColor: '#f1c40f',
    fontFamily: 'Quicksand',
    padding: '10px',
    margin: '10px auto 10px auto'
  },

  jumbotron: {
    background: 'rgba(25, 25, 25, .3)',
    fontFamily: 'Sacramento',
    paddingBottom: '25px'
  },

  jumbotronInput: {
    fontFamily: 'Quicksand'
  }
};

module.exports = styles;
