FROM node:18-alpine AS builder                                                                                                                                                                                      

RUN apk add --no-cache python3 make g++                                                                                                                                                                             
                                                                                                                                                                                                                      
WORKDIR /app                                                                                                                                                                                                        
                                                                                                                                                                                                                      
COPY shared ./shared                                                                                                                                                                                                
                                                                                                                                                                                                                      
COPY backend/package*.json ./backend/                                                                                                                                                                               
                                                                                                                                                                                                                      
WORKDIR /app/backend                                                                                                                                                                                                
RUN npm ci                                                                                                                                                                                                          
                                                                                                                                                                                                                      
COPY backend ./                                                                                                                                                                                                     
                                                                                                                                                                                                                      
RUN npm run build                                                                                                                                                                                                   
                                                                                                                                                                                                                      
FROM node:18-alpine                                                                                                          

RUN apk add --no-cache python3 make g++                                                                                                                                                                             
WORKDIR /app                                                                                                                                                                                                        
                                                                                                                                                                                                                      
COPY backend/package*.json ./                                                                                                                                                                                       
RUN npm ci --only=production                                                                                                                                                                                        
                                                                                                                                                                                                                      
COPY --from=builder /app/backend/dist ./dist                                                                                                                                                                        
COPY --from=builder /app/shared ./shared                                                                                                                                                                            
                                                                                                                                                                                                                      
RUN mkdir -p /app/data                                                                                                                                                                                              
                                                                                                                                                                                                                      
EXPOSE 8000                                                                                                                                                                                                         
CMD ["node", "dist/backend/src/index.js"]