plugins {
    id("java")
    id("org.springframework.boot") version "3.1.4"
}

group = "my.web"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

buildscript {
    dependencies {
        classpath("org.springframework.boot:spring-boot-gradle-plugin:3.1.4")
    }
}

dependencies {
    // https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-cache
    implementation("org.springframework.boot:spring-boot-starter-cache:3.2.0")
    // https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-data-jpa
    implementation("org.springframework.boot:spring-boot-starter-data-jpa:3.2.0")
    // https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-web
    implementation("org.springframework.boot:spring-boot-starter-web:3.2.0")
    // https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-validation
    implementation("org.springframework.boot:spring-boot-starter-validation:3.2.0")
    // https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-security
    implementation("org.springframework.boot:spring-boot-starter-security:3.2.0")

    // https://mvnrepository.com/artifact/io.springfox/springfox-swagger2
    implementation("io.springfox:springfox-swagger2:3.0.0")
    // https://mvnrepository.com/artifact/io.springfox/springfox-swagger-ui
    implementation("io.springfox:springfox-swagger-ui:3.0.0")

    // https://mvnrepository.com/artifact/org.springframework.security/spring-security-core
//    implementation("org.springframework.security:spring-security-core:6.2.0")
    // https://mvnrepository.com/artifact/org.springframework.security/spring-security-crypto
//    implementation("org.springframework.security:spring-security-crypto:6.2.0")
//// https://mvnrepository.com/artifact/org.springframework.security.oauth/spring-security-oauth2
//    implementation("org.springframework.security.oauth:spring-security-oauth2:2.5.2.RELEASE")

    // https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt-impl
    runtimeOnly("io.jsonwebtoken:jjwt-impl:0.12.3")
    // https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt-api
    implementation("io.jsonwebtoken:jjwt-api:0.12.3")
    // https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt-jackson
    runtimeOnly("io.jsonwebtoken:jjwt-jackson:0.12.3")


    // https://mvnrepository.com/artifact/org.postgresql/postgresql
    implementation("org.postgresql:postgresql:42.6.0")

    testImplementation(platform("org.junit:junit-bom:5.9.1"))
    testImplementation("org.junit.jupiter:junit-jupiter")
}

tasks.test {
    useJUnitPlatform()
}