package com.demo.secretsanta.models;

import java.util.List;

public class SecretSantaRequest {
    private List<Relation> relations;
    private List<String> members;

    public List<Relation> getRelations() {
        return relations;
    }

    public void setRelations(List<Relation> relations) {
        this.relations = relations;
    }

    public List<String> getMembers() {
        return members;
    }

    public void setMembers(List<String> members) {
        this.members = members;
    }
}
