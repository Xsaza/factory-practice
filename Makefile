build:
	docker build -t factory-practice-img:0.0.1 .

remove:
	docker rmi -f factory-practice-img:0.0.1

run:
	docker run -d --name factory-practice -p 3000:3000 factory-practice-img:0.0.1

stop:
	docker stop factory-practice && docker rm factory-practice
