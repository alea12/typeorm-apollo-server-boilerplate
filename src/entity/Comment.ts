import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { Post } from './Post'

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title!: string

  @ManyToOne(() => Post, (post) => post.comments)
  @JoinColumn()
  post!: Post
}
