package com.fabioaacarneiro.friendListJ.services;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration implements WebMvcConfigurer {
    
    // this code use vite uri original, change for some other you want
    final String uriFrontOrigins = "http://localhost:5173";
    
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins(uriFrontOrigins)
            .allowedMethods("GET", "POST", "DELETE", "PUT", "OPTION", "TRACE", "HEAD", "CONNECT");
    }
}
