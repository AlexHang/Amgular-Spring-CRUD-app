package com.alexhang.credit_card_crud_app.controllers;

import com.alexhang.credit_card_crud_app.model.CreditCard;
import com.alexhang.credit_card_crud_app.repositories.CreditCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class CreditCardController {
    @Autowired
    CreditCardRepository creditCardRepository;
    @GetMapping("/creditCards")

    public CreditCard getAllCreditCards(@RequestParam String id) {
        try {
            List<CreditCard> creditCards = new ArrayList<CreditCard>();


            return creditCardRepository.findById(id).get();

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping("/creditCards/{id}")
    public ResponseEntity<CreditCard> getCreditCardById(@PathVariable("id") String id) {
        Optional<CreditCard> creditCardData = creditCardRepository.findById(id);

        if (creditCardData.isPresent()) {
            return new ResponseEntity<>(creditCardData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/creditCards")
    public ResponseEntity<CreditCard> createCreditCard(@RequestBody CreditCard creditCard) {
        try {
            CreditCard _creditCard = creditCardRepository.save(new CreditCard(creditCard.getAccountNr(), creditCard.getOwner(), creditCard.getBalance()));
            return new ResponseEntity<>(_creditCard, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/creditCards/{id}")
    public ResponseEntity<CreditCard> updateCreditCard(@PathVariable("id") String id, @RequestBody CreditCard creditCard) {
        Optional<CreditCard> creditCardData = creditCardRepository.findById(id);

        if (creditCardData.isPresent()) {
            CreditCard _creditCard = creditCardData.get();
            _creditCard.setAccountNr(creditCard.getAccountNr());
            _creditCard.setOwner(creditCard.getOwner());
            _creditCard.setBalance(creditCard.getBalance());
            return new ResponseEntity<>(creditCardRepository.save(_creditCard), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/creditCards/{id}")
    public ResponseEntity<HttpStatus> deleteCreditCard(@PathVariable("id") String id) {
        try {
            creditCardRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/creditCards")
    public ResponseEntity<HttpStatus> deleteAllCreditCards() {
        try {
            creditCardRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/creditCards/id")
    public ResponseEntity<List<CreditCard>> findById(String Id) {
        try {
            List<CreditCard> creditCards = creditCardRepository.findAllById(Id);

            if (creditCards.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(creditCards, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

