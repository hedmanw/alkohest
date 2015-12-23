FROM    centos:centos6

# Enable Extra Packages for Enterprise Linux (EPEL) for CentOS
RUN     yum install -y epel-release
# Install Node.js and npm
RUN     yum install -y nodejs npm

RUN mkdir -p /opt/app

# Install app dependencies
COPY package.json /opt/app/package.json
RUN cd /opt/app; npm install

# Bundle app source
WORKDIR /opt/app
ADD . /opt/app

EXPOSE  8080
CMD ["npm", "run", "deploy"]
