import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';

const db = new Sequelize('blog', null, null, {
  dialect: 'sqlite',
  storage: './blog.sqlite',
});

const AuthorModel = db.define('author', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  stars: { type: Sequelize.INTEGER },
});

const PostModel = db.define('post', {
  genre: { type: Sequelize.STRING },
  text: { type: Sequelize.STRING },
  title: { type: Sequelize.STRING },
  views: { type: Sequelize.INTEGER },
});

AuthorModel.hasMany(PostModel);
PostModel.belongsTo(AuthorModel);

// create mock data with a seed, so we always get the same
casual.seed(123);
db.sync({ force: true }).then(() => {
  _.times(10, () => {
    return AuthorModel.create({
      firstName: casual.first_name,
      lastName: casual.last_name,
      stars: casual.integer(1, 5),
    }).then(author => {
      return _.times(10, () =>
        author.createPost({
          genre: casual.random_element([
            'Sci-Fi',
            'Fantasy',
            'Self Help',
            'Mystery',
            'Programming',
          ]),
          text: casual.sentences(22),
          title: casual.sentence,
          views: casual.integer(0, 3300),
        }),
      );
    });
  });
});

const Author = db.models.author;
const Post = db.models.post;

export { Author, Post };
