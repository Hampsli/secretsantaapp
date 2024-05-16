package com.demo.secretsanta.services;

import com.demo.secretsanta.models.Relation;
import com.demo.secretsanta.models.SecretSantaRequest;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class FamilyService {

    public List<Relation> getAllCombinations(List<String> persons, List<Relation> relations){
        List<Relation>allCombinations=new ArrayList<>();
        for (Relation r:relations) {
            for (String p:persons) {
                allCombinations.add(new Relation(r.getP1(),p));
                allCombinations.add(new Relation(r.getP2(),p));
            }
        }
        return allCombinations;
    }
    public List<Relation>deleteAllRepeatedNames(List<Relation> allCombinations){
        List<Relation>combinationsWithoutRepeatNames=new ArrayList<>();


        for (Relation relation:allCombinations) {
            if (!relation.getP1().equals(relation.getP2())) {
                combinationsWithoutRepeatNames.add(relation);
            }
        }
        return combinationsWithoutRepeatNames;
    }
    public List<Relation> getAllRestrictedRelationships(List<Relation>restrictedRelations){
        List<Relation> relationList=new ArrayList<>();
        relationList.addAll(restrictedRelations);
        for (Relation restrictedRelation:restrictedRelations) {
            relationList.add(new Relation(restrictedRelation.getP2(),restrictedRelation.getP1()));
        }
        return relationList;
    }
    public List<Relation> deleteRestrictedRelationships(List<Relation>combinatiosNoRepeatedNames,List<Relation> restrictedRelationships){
        List<Relation>secretSanta=new ArrayList<>();
        secretSanta.addAll(combinatiosNoRepeatedNames);
        for (Relation restrictedRelation:restrictedRelationships ) {
            for (Relation norepeated:combinatiosNoRepeatedNames) {
                if (norepeated.getP1().equals(restrictedRelation.getP1())
                        &&norepeated.getP2().equals(restrictedRelation.getP2())
                ){
                    secretSanta.remove(norepeated);
                }
            }
        }
        return secretSanta;
    }
    public List<Relation> getSecretSantap3(List<String> persons, List<Relation> relations){

        List<Relation>allCombinations=getAllCombinations(persons, relations);
        List<Relation>combinationsWithoutRepeatedNames=deleteAllRepeatedNames(allCombinations);
        List<Relation>getAllRestrictedCombo=getAllRestrictedRelationships(relations);

        List<Relation>secretSanta=deleteRestrictedRelationships(combinationsWithoutRepeatedNames,getAllRestrictedCombo);


        return secretSanta;
    }
    public List<Relation> testSecretSanta3(SecretSantaRequest request){
        List<Relation> secretSanta=new ArrayList<>();
        if (!request.getRelations().isEmpty()) {
            secretSanta=getSecretSantap3(request.getMembers(),request.getRelations());
        }else {
            for (int i = 0; i < request.getMembers().size(); i++) {
                for (int j = 0; j < request.getMembers().size(); j++) {
                    if(!request.getMembers().get(i).equals(request.getMembers().get(j))){
                        secretSanta.add(new Relation(request.getMembers().get(i),request.getMembers().get(j)));
                    }
                }
            }
        }
        return secretSanta;
    }

}
