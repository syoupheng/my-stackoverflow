FROM python:3.8

# RUN apt-get update                   \
# && apt-get -y install curl          \
# && apt-get -y install nano

WORKDIR /Desktop

COPY requirements.txt requirements.txt          
RUN pip3 install -r requirements.txt             \
&& pip install python-decouple                  \
&& pip install mysql-connector-python           \
&& apt-get update
COPY ./main_copy.py /Desktop/
COPY . .

# EXPOSE 8000
#CMD ["python3", "mysite/manage.py", "runserver"]

