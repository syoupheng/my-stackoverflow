FROM mariadb

RUN apt-get update                      \
&& apt-get install -y mariadb-server    \
&& apt-get -y install curl          \
&& apt-get -y install nano          \
&& apt-get -y install systemd

COPY ../my.cnf /usr/my.cnf
COPY ../my.cnf /etc/mysql/my.cnf

EXPOSE 3306

#HEALTHCHECK --interval=5s --timeout=10s --start-period=5s --retries=3 CMD ["mysql", "-uroot", "-e", "-p", "cocolasticot", "SELECT * FROM User;"]
#ENTRYPOINT [ "service mysql stop", "mysqld_safe --skip-grant-tables", "mysql -u root", "use mysql", "update user set authentication_string=password('password') where user='root'", "exit", "mysql start" ]

