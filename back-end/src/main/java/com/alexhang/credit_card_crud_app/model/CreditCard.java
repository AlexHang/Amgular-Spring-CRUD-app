package com.alexhang.credit_card_crud_app.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "tutorials")
public class CreditCard {
    @Id
    private String id;
    private String accountNr;
    private String owner;
    private Integer balance;
    public CreditCard() {
    }

    public CreditCard(String accountNr, String owner, Integer balance) {
        this.accountNr = accountNr;
        this.owner = owner;
        this.balance = balance;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAccountNr() {
        return accountNr;
    }

    public void setAccountNr(String accountNr) {
        this.accountNr = accountNr;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public Integer getBalance() {
        return balance;
    }

    public void setBalance(Integer balance) {
        this.balance = balance;
    }
}
