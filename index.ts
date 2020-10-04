import { BaseEntity, Column, ConnectionOptions, createConnection, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: "draft" })
  status: string;
}

const connectionOptions: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 15432,
  username: "typeorm",
  password: "typeorm",
  database: "typeorm",
  entities: [Post],
  logging: false,
};

const randomString = () => {
  return Math.random().toString(36).substring(7);
};

(async () => {
  await createConnection(connectionOptions);
  // expect correct default value taken from entity definition
  try {
    const post = await Post.create({ name: randomString() }).save();
    console.log(post);
  } catch (e) {
    console.log(e);
  }
})();
