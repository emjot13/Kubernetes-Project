It is a simple app built with: 
- React - used for frontend
- Next.js - used for easy creation of pages
- MongoDB - used as a database for messages
- Redis - used as a database for messages with timeout
- Node.js - used as a backend tool
- Bootstrap - used for styling 
- Skaffold - used for watching over files and immediately applying changes to kubernetes configuration

The main goal of this project was to learn how to deploy full-stack app (even if a very basic one) on kubernetes.

The frontend consists of landing page and one subpage.

    On the landing page user can:
    - send a message and a secret key that will be stored in pod with MongoDB container
    - receive a message if the correct key was provided

    On the /timeout subpage user can do both previous things but with a little twist - they have to choose an amount of time after which the message won't be accessible.
    This feature makes use of in-memory database Redis container.


The backend consists of four endpoints.

    - /secret - posting messages
    - /secret/get - posting key and receving message
    - /secret_timeout - posting messages with expration time
    - /secret_timeout/get - posting key and receiving message
    
    
    
The kubernetes configuration consists of seven files.

    - mongo_dv_pv.yaml - creates persistent volume as to not loose data if the pod went down
    - mongo_db_pvc.yaml - creates persisten volume claim with storage of 128 MB
    - mongo.yaml - configuration for mongoDB database:
        - kind: Deployment
        - image: mongo
        - volumeMount and volumes for persisting data
        - one replica as I did not think anymore were needed
    - redis.yaml - configuration for Redis database:
        - kind: Deployment
        - image: redis
        - no volumes as persisting data was not needed for short-living keys
        - again one replica
    - backend.yaml - configuration for backend:
        - kind: Deploment
        - image: emjot13/backend
        - one replica
    - frontend.yaml - configuration for frontend:
        - kind: Deployment
        - image: emjot13/frontend
        - one replica
    - ingress.yaml - configuration for ingress service:
        - apiVersion: networking.k8s.io/v1
        - kind: Ingress
        - host: project.dev
        - ingress.class : nginx
        - use-regex: true - used for paths distinction
        - paths:
            - path: /secret?(.*) - matches all backend endpoints
                - service: backend
                - port: 3000
            - path: /?(.*) - matches all other endpoints as backend is already checked at this point
                - service: frontend
                - port: 3000
    
Feel free to contact me if you have any questions.
    
    
