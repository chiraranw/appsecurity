package com.org.spring.security.control;

import com.org.spring.security.model.Student;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("api/v1/students/")
public class StudentController {

    private static List<Student> students= Arrays.asList(
            new Student(1,"Nation"),
            new Student(2,"Billy"),
            new Student(3,"James")
    );

    @GetMapping(path = "{id}")
    public Student getStudent(@PathVariable("id") Integer id){
        return  students
                .stream()
                .filter(student -> student.getId().equals(id))
                .findFirst()
                .orElseThrow(()->new IllegalStateException("Student "+id +" not found."));
    }


}
