const {GraphQLServer} = require('graphql-yoga')
const {Prisma, forwardTo} = require('prisma-binding')

const resolvers = {
  Query: {
    posts(parent, args, ctx, info) {
      return ctx.db.query.blogPosts({}, info)
    },
    post(parent, args, ctx, info) {
      return ctx.db.query.blogPosts({where: {id: args.id}}, info)
    },
  },
  Mutation: {
    createBlogPost: forwardTo('db'),
    publishBlogPost(parent, {id}, ctx, info) {
      return ctx.db.mutation.updateBlogPost(
        {
          where: {id},
          data: {published: true},
        },
        info,
      )
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql', // the auto-generated GraphQL schema of the Prisma API
      endpoint: 'https://us1.prisma.sh/public-shardseeker-99/chess/dev', // the endpoint of the Prisma API
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      // secret: 'mysecret123', // only needed if specified in `database/prisma.yml`
    }),
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))
