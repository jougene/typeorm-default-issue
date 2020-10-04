create table if not exists "post"
(
    id serial not null
        constraint post_id_pkey
            primary key,
    name varchar not null,
    status varchar not null
);
