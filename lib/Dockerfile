FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/USMAN-SER/USMAN-MD /root/USMAN-SER
WORKDIR /root/USMAN-SER/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
