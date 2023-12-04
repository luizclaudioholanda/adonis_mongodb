import { prisma } from '@ioc:Adonis/Addons/Prisma'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostController {
  public async store({ request }: HttpContextContract) {
    const post = await prisma.post.create({
      data: request.only(['title', 'content']),
    })

    return post
  }
}
