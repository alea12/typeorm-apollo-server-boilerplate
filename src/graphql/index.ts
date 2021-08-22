import { getConnection } from 'typeorm'
import { User } from '../entity/User'
import { Post } from '../entity/Post'
import { Comment } from '../entity/Comment'
import { Resolvers } from './generated/graphql'

// Resolver Map
export const resolvers: Resolvers = {
  Post: {
    comments: async (parent: Post) => {
      return await commentsOfPost(parent)
    },
  },

  User: {
    posts: async (parent: User) => {
      return await postsOfUser(parent)
    },
  },

  Query: {
    user: async (_, params) => {
      return await user(params)
    },
    users: async () => {
      return await users()
    },
  },

  Mutation: {
    createUser: async (_, params) => {
      return await createUser(params)
    },
  },
}

// these functions below are to be moved to usecases

const commentsOfPost = async (post: Post): Promise<Comment[]> => {
  const commentRepository = getConnection().getRepository(Comment)
  return await commentRepository.find({ where: { post } })
}

const postsOfUser = async (user: User): Promise<Post[]> => {
  const postRepository = getConnection().getRepository(Post)
  return await postRepository.find({ where: { user } })
}

const users = async (): Promise<User[]> => {
  const userRepository = getConnection().getRepository(User)
  return await userRepository.find()

  // if not using resolver chain, DB request should be like this:
  // return await userRepository.find({ relations: ['posts', 'posts.comments'] })
}

const user = async (params: { id: number }): Promise<User | null> => {
  const userRepository = getConnection().getRepository(User)
  return (await userRepository.findOne({ where: { id: params.id } })) || null
}

const createUser = async (params: { name: string }): Promise<boolean> => {
  const userRepository = getConnection().getRepository(User)
  const user = new User()
  user.name = params.name

  try {
    userRepository.save(user)
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
