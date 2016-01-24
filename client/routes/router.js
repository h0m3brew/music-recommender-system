Router.route('index', {
  path: '/',
  waitOn: function() {
    return [
      Meteor.subscribe('moods'),
      Meteor.subscribe('genres')
    ]
  },
  data: function() {
    return {
      moods: Mood.find(),
      genres: Genre.find()
    }
  }
});
