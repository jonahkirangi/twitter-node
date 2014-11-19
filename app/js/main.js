var Tweets = (function() {

    return {

      init: function(template, attachTO, searchTerm) {
        self = this;
        this.template = template;
        this.attachTO = attachTO;
        this.searchTerm = searchTerm;
        var self = this;
        Tweets.fetch();
      },

      fetch: function() {
        var self = this;
        $.ajax({
          url:'/getposts',
          type: "GET",

          }).done(function(data) {
            console.log(data);
            self.tweets = $.map(data, function(data) {
              return {
                date: data.created_at,
                postersURLimg: data.user.profile_image_url,
                text: data.text,
                picLink: data.text.split('...')[1],
                link: "https://twitter.com/"+data.user.screen_name+'/status/'+data.id_str,
              };
            });
            self.render();
          });
      },

      render: function() {
        var template = Handlebars.compile( this.template );
        var temp = template(this.tweets);
        this.attachTO.append(temp);
      }

    };

}());
