package com.org.spring.security.control;


import com.org.spring.security.model.Student;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/v1/manage")
public class StudentManagementController {


    @GetMapping(value = "/users")
    @PreAuthorize("hasAnyRole('USER,ADMIN,MANAGER')")
    public ResponseEntity<Student> users() {
        return new ResponseEntity<Student>(new Student(1,"Users"), HttpStatus.OK);
    }

    @GetMapping(value = "/managers")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<Student> managers() {
        return new ResponseEntity<Student>(new Student(1,"Managers"), HttpStatus.OK);
    }

    @GetMapping(value = "/admins")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Student> admins() {
        return new ResponseEntity<Student>(new Student(1,"Admins"), HttpStatus.OK);
    }


}
