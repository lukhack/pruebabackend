CREATE TABLE db_task (
  id serial PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  begin_date TIMESTAMP,
  end_date TIMESTAMP,
  duration FLOAT,
  "createdAt" DATE,
  "updatedAt" DATE,
  priority_id int,
  status_id int,
  task_id int null
);



CREATE TABLE db_priority (
  id serial PRIMARY KEY,
  "createdAt" DATE,
  "updatedAt" DATE,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NULL
);


INSERT INTO db_priority (name) VALUES ('Urgente');
INSERT INTO db_priority (name) VALUES ('Normal');
INSERT INTO db_priority (name) VALUES ('Bajo');


CREATE TABLE db_status (
  id serial PRIMARY KEY,
  "createdAt" DATE,
  "updatedAt" DATE,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) null

);



INSERT INTO db_status (name) VALUES ('Iniciada');
INSERT INTO db_status (name) VALUES ('En Proceso');
INSERT INTO db_status (name) VALUES ('Terminada');



CREATE TABLE db_status_task (
  id serial PRIMARY KEY,
  "createdAt" DATE,
  "updatedAt" DATE,
  task_id int not null,
  status_id int not null
);



ALTER TABLE db_task ADD CONSTRAINT db_task_fk FOREIGN KEY (task_id) REFERENCES public.db_task(id);
ALTER TABLE db_task ADD CONSTRAINT db_task_fk_1 FOREIGN KEY (priority_id) REFERENCES public.db_priority(id);
ALTER TABLE db_task ADD CONSTRAINT db_task_fk_2 FOREIGN KEY (status_id) REFERENCES public.db_status(id);

ALTER TABLE db_status_task ADD CONSTRAINT db_status_task_fk FOREIGN KEY (task_id) REFERENCES public.db_task(id);
ALTER TABLE db_status_task ADD CONSTRAINT db_status_task_fk_1 FOREIGN KEY (status_id) REFERENCES public.db_status(id);




INSERT INTO db_task (name, description, begin_date, end_date, duration, "createdAt", "updatedAt", priority_id, status_id) VALUES ('Task 1', 'Task 1','2023-01-03 12:30:00', '2023-01-03 12:40:00',30, '2023-01-03','2023-01-03', 1, 1);
INSERT INTO db_task (name, description, begin_date, end_date, duration, "createdAt", "updatedAt", priority_id, status_id) VALUES ('Task 2', 'Task 2','2023-01-03 12:30:00', '2023-01-03 12:40:00',30, '2023-01-03','2023-01-03', 1, 1);
INSERT INTO db_task (name, description, begin_date, end_date, duration, "createdAt", "updatedAt", priority_id, status_id) VALUES ('Task 3', 'Task 3','2023-01-03 12:30:00', '2023-01-03 12:40:00',30, '2023-01-03','2023-01-03', 1, 1);
INSERT INTO db_task (name, description, begin_date, end_date, duration, "createdAt", "updatedAt", priority_id, status_id) VALUES ('Task 4', 'Task 4','2023-01-03 12:30:00', '2023-01-03 12:40:00',30, '2023-01-03','2023-01-03', 1, 1);
INSERT INTO db_task (name, description, begin_date, end_date, duration, "createdAt", "updatedAt", priority_id, status_id) VALUES ('Task 5', 'Task 5','2023-01-03 12:30:00', '2023-01-03 12:40:00',30, '2023-01-03','2023-01-03', 1, 1);




