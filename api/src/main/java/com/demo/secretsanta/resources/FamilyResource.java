package com.demo.secretsanta.resources;

import com.demo.secretsanta.models.Relation;
import com.demo.secretsanta.models.SecretSantaRequest;
import com.demo.secretsanta.services.FamilyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping(value = "/api")
public class FamilyResource {

    @Autowired
    private FamilyService familyService;
   /* @PostMapping(value = "/members", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity createFamily(@RequestBody List<FamilyMember> family){
        try {
            return new ResponseEntity(familyService.createFamily(family),HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping(value = "/members", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity addMembers(@RequestBody List<FamilyMember> familyadd){
        try {
            List<FamilyMember> family=familyService.addMembers(familyadd);
            if (family.isEmpty()) {
                return new ResponseEntity(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity(family,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping(value = "/secret-santa", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity getSecretSanta(@RequestParam String name){
        try {
            SecretSanta secretSanta=familyService.getSecretSanta(new FamilyMember(name,"me"));
            if (secretSanta.getSecretSanta().isEmpty()) {
                return new ResponseEntity(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity(secretSanta,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }*/

    @PostMapping(value = "/secret-santa-part-three", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity getSecretSanta(@RequestBody SecretSantaRequest request) {
        List<Relation>secretSanta=familyService.testSecretSanta3(request);
        return new ResponseEntity(secretSanta, HttpStatus.OK);
    }




}
