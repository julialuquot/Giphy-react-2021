


pipeline{

    agent any
    environment{
        HOST_SOURCE_DIR = '/opt/lpcng-refonte/preprod-refonte'
        HOST_LOG_DIR = '/home/admin/lpc/log/preprod-refonte'
        LPCNG_DOCKER_PORT = 8100
        LPCNG_DOCKER_NAME = "lpcng-refonte-run-preprod"
        FRONT_DOCKER_PORT = 8101
        FRONT_DOCKER_NAME = "lpc-front-refonte-run-preprod"
        IMAGE_NAME="lpc/frontend"
        NEXUS_PRIVATE_REPOSITORY="127.0.0.1:8123"
        NEXUS_AWS_REPOSITORY="520723914241.dkr.ecr.eu-west-3.amazonaws.com"
        DOCKER_COMPOSE_INT_STACK_PATH="/var/jenkins_home/lpc-frontend/int/docker-compose.yml"
        DOCKER_COMPOSE_STAGING_STACK_PATH="/var/jenkins_home/prin/stack/staging/docker-compose.yml"
        DOCKER_COMPOSE_STACK_SERVICE_NAME="frontend"
    }

    stages {
        stage('initialize') {
            agent {
                docker { 
                    image 'node:14-alpine'
                }
            }
            steps{
                checkout scm
                 // Set packages versions
                script {
                     
                    VERSION = sh(returnStdout: true, script: 'node -e "console.log(require(\'./package.json\').version)" | tr -d \'\n\'')
                    sh "echo $VERSION"

                }
            }

        }
         stage ('Build') {
            agent {
                docker { 
                    image 'node:14-alpine'
                }
            }
            steps{    
                sh "echo Build ${IMAGE_NAME} version ${VERSION}"        
                // sh "npm install"
                
            }
        }

        //   stage ('js lint') {
        //     agent {
        //         docker { 
        //             image 'node:14-alpine'
        //         }
        //     }
        //     steps{            
        //         sh "npm run lint"
                
        //     }
        // }

        //   stage ('Test') {
        //     agent {
        //         docker { 
        //             image 'node:14-alpine'
        //         }
        //     }
        //     steps{            
        //         sh "npm test"
                
        //     }
        // }
         stage ('Build Docker Image') {
            // when {
            //     expression {
            //         return (env.BRANCH_NAME.replaceAll( '/', '-' ) == 'develop' 
            //         || env.BRANCH_NAME.replaceAll( '/', '-' ).startsWith(RELEASE_BRANCH_START_WITH) 
            //         || env.BRANCH_NAME.replaceAll( '/', '-' ) == 'master')
            //     }
            // }
            steps {
				script {
                    if (env.BRANCH_NAME.replaceAll( '/', '-' ) == 'master') {
                        NODE_ENV="production"
                        DOCKER_FILE="Dockerfile"
                    } else {
                        NODE_ENV="integration"
                        DOCKER_FILE="DockerfileInt"
                    }
                    sh "docker build --force-rm --build-arg env_name=$NODE_ENV -f $DOCKER_FILE -t $IMAGE_NAME:${VERSION}-snapshot ."
                    sh "ls -la"
                    // if (env.BRANCH_NAME.replaceAll( '/', '-' ) == 'develop') {
                    //     sh "docker build --force-rm --build-arg env_name=integration --build-arg npm_validation_package_version=${NPM_VALIDATION_PACKAGE_VERSION} -f Dockerfile -t $IMAGE_NAME:${VERSION}-snapshot ."
                    // }  else if (env.BRANCH_NAME.replaceAll( '/', '-' ).startsWith(RELEASE_BRANCH_START_WITH)) {
					// 	sh "docker build --force-rm --build-arg env_name=staging --build-arg npm_validation_package_version=${NPM_VALIDATION_PACKAGE_VERSION} -f Dockerfile -t $IMAGE_NAME:${VERSION}-staging ."
                    // } else if (env.BRANCH_NAME.replaceAll( '/', '-' ) == 'master') {
                    //     sh "docker build --force-rm --build-arg env_name=production --build-arg npm_validation_package_version=${NPM_VALIDATION_PACKAGE_VERSION} -f Dockerfile -t $IMAGE_NAME:${VERSION} ."
                    // }
                }
            }
        }

              stage('Publish sources') {
            parallel {
                stage ('Push Docker Image') {
                    // when {
                    //     expression {
                    //         return (env.BRANCH_NAME.replaceAll( '/', '-' ) == 'develop' 
                    //         || env.BRANCH_NAME.replaceAll( '/', '-' ).startsWith(RELEASE_BRANCH_START_WITH) 
                    //         || env.BRANCH_NAME.replaceAll( '/', '-' ) == 'master')
                    //     }
                    // }
                    steps{
                        script {

                             sh "docker tag $IMAGE_NAME:${VERSION}-snapshot $NEXUS_PRIVATE_REPOSITORY/$IMAGE_NAME:${VERSION}-snapshot"
                             sh "docker login -u admin -p SBwkEnygqUVcdEWdpv8b 127.0.0.1:8123"
                             sh "docker push $NEXUS_PRIVATE_REPOSITORY/$IMAGE_NAME:${VERSION}-snapshot"
                            // if (env.BRANCH_NAME.replaceAll( '/', '-' ) == 'develop') {
                            //     sh "docker tag $IMAGE_NAME:${VERSION}-snapshot $NEXUS_PRIVATE_REPOSITORY/$IMAGE_NAME:${VERSION}-snapshot"
                            //     sh "docker push $NEXUS_PRIVATE_REPOSITORY/$IMAGE_NAME:${VERSION}-snapshot"
                            // } else if (env.BRANCH_NAME.replaceAll( '/', '-' ).startsWith(RELEASE_BRANCH_START_WITH)) {
                            //     sh "docker tag $IMAGE_NAME:${VERSION}-staging $NEXUS_PRIVATE_REPOSITORY/$IMAGE_NAME:${VERSION}-staging"
                            //     sh "docker push $NEXUS_PRIVATE_REPOSITORY/$IMAGE_NAME:${VERSION}-staging"
                            // } else if (env.BRANCH_NAME.replaceAll( '/', '-' ) == 'master') {
                            //     sh "docker tag $IMAGE_NAME:${VERSION} $AWS_ECR_REPOSITORY/$IMAGE_NAME:${VERSION}"
                            //     sh "docker push $AWS_ECR_REPOSITORY/$IMAGE_NAME:${VERSION}"

                            //     sh "docker tag $IMAGE_NAME:${VERSION} $AWS_ECR_REPOSITORY/$IMAGE_NAME:latest"
                            //     sh "docker push $AWS_ECR_REPOSITORY/$IMAGE_NAME:latest"
                            // }
                        }
                    }
                }
                stage ('Publish NPM sources') {

                    // when {
                    //     expression {
                    //         return (env.BRANCH_NAME.replaceAll( '/', '-' ) == 'develop' 
                    //         || env.BRANCH_NAME.replaceAll( '/', '-' ).startsWith(RELEASE_BRANCH_START_WITH) 
                    //         || env.BRANCH_NAME.replaceAll( '/', '-' ) == 'master')
                    //     }
                    // }
                     agent {
                            docker { 
                                image 'node:14-alpine'
                            }
                        }

                    
                    steps {
                        
                        script {
                            sh "npm publish"
                        }
                    }
                }
                       // Deploy to server
                stage('Deploy to Server'){
                    // when {
                    //     expression {
                    //         return (env.BRANCH_NAME.replaceAll( '/', '-' ) == 'develop' 
                    //         || env.BRANCH_NAME.replaceAll( '/', '-' ).startsWith(RELEASE_BRANCH_START_WITH) 
                    //         || env.BRANCH_NAME.replaceAll( '/', '-' ) == 'master')
                    //     }
                    // }
                    steps{
                        script {
                            sh "echo Deploy to INT environnement"
                            sh "docker-compose -f ${DOCKER_COMPOSE_INT_STACK_PATH}  rm -f -s ${DOCKER_COMPOSE_STACK_SERVICE_NAME}"
                            sh "docker-compose -f ${DOCKER_COMPOSE_INT_STACK_PATH} pull ${DOCKER_COMPOSE_STACK_SERVICE_NAME}"
                            sh "docker-compose -f ${DOCKER_COMPOSE_INT_STACK_PATH} up -d ${DOCKER_COMPOSE_STACK_SERVICE_NAME}"
                            // sh "docker network connect bridge ${DOCKER_COMPOSE_INT_CONTAINER_NAME}"
                            // if (env.BRANCH_NAME.replaceAll( '/', '-' ) == 'develop') {
                            //     sh "echo Deploy to INT environnement"
                            //     sh "docker-compose -f ${DOCKER_COMPOSE_INT_STACK_PATH}  rm -f -s ${DOCKER_COMPOSE_STACK_SERVICE_NAME}"
                            //     sh "docker-compose -f ${DOCKER_COMPOSE_INT_STACK_PATH} pull ${DOCKER_COMPOSE_STACK_SERVICE_NAME}"
                            //     sh "docker-compose -f ${DOCKER_COMPOSE_INT_STACK_PATH} up -d ${DOCKER_COMPOSE_STACK_SERVICE_NAME}"
                            //     sh "docker network connect bridge ${DOCKER_COMPOSE_INT_CONTAINER_NAME}"
                            // } else if (env.BRANCH_NAME.replaceAll( '/', '-' ).startsWith(RELEASE_BRANCH_START_WITH)) {
                            //     sh "echo Deploy to STAGING environnement"
                            //     sh "docker-compose -f ${DOCKER_COMPOSE_STAGING_STACK_PATH}  rm -f -s ${DOCKER_COMPOSE_STACK_SERVICE_NAME}"
                            //     sh "docker-compose -f ${DOCKER_COMPOSE_STAGING_STACK_PATH} pull ${DOCKER_COMPOSE_STACK_SERVICE_NAME}"
                            //     sh "docker-compose -f ${DOCKER_COMPOSE_STAGING_STACK_PATH} up -d ${DOCKER_COMPOSE_STACK_SERVICE_NAME}"
                            //     sh "docker network connect bridge ${DOCKER_COMPOSE_STAGING_CONTAINER_NAME}"
                            // } else {
                            //     sh "echo 'Nothing to deploy on ${branche}. Only the develop branch is deployed automatically'"
                            // }
                        }
                    }
                }
                    }
                }



    }


}
