package com.demo.secretsanta.resources;

import com.demo.secretsanta.models.Relation;
import com.demo.secretsanta.models.SecretSantaRequest;
import com.demo.secretsanta.services.FamilyService;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(SpringExtension.class)
@SpringBootTest

public class FamilyResourceTest {

    @Mock
    private FamilyService familyService;



    @InjectMocks
    @Resource
    private FamilyResource familyResource;

    @Before
    public void init(){
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void getSecretSantaWithoutRelationships(){
        SecretSantaRequest request=getSecretSantaRequest(false);
        ResponseEntity response=familyResource.getSecretSanta(request);
        assertEquals(response.getStatusCode(), HttpStatus.OK);
    }

    @Test
    public void getSecretSantWithRelationships(){
        SecretSantaRequest request=getSecretSantaRequest(true);
        ResponseEntity response=familyResource.getSecretSanta(request);
        assertEquals(response.getStatusCode(), HttpStatus.OK);
    }

    private SecretSantaRequest getSecretSantaRequest(Boolean relationships){

        SecretSantaRequest request=new SecretSantaRequest();
        request.setRelations(new ArrayList<>());
        if (relationships){
            Relation r1=new Relation("lili","andy");
            Relation r2=new Relation("laura","lili");
            request.setRelations(Arrays.asList(r1,r2));
        }
        List<String>members=Arrays.asList("lili","andy","laura","edgar");
        request.setMembers(members);
        return request;
    }
}
