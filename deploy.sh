npm run build
npm run compile
sudo docker build -t alkohest/alkohest .
sudo docker run -p 49160:8080 -d alkohest/alkohest
