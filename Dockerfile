# 1단계: 빌드 전용 이미지 (소스코드를 가져와서 .jar 파일을 만듭니다)
FROM gradle:7.6-jdk17 AS build
WORKDIR /app
COPY . .
# 실행 권한 부여 및 빌드 (테스트 제외)
RUN chmod +x gradlew
RUN ./gradlew clean build -x test

# 2단계: 실행 전용 이미지 (가벼운 이미지에 1단계에서 만든 .jar만 쏙 빼옵니다)
FROM eclipse-temurin:17-jdk-jammy
WORKDIR /app
# 1단계(build)에서 생성된 jar 파일을 가져오기
COPY --from=build /app/build/libs/*.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]