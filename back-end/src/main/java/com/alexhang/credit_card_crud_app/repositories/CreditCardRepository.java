package com.alexhang.credit_card_crud_app.repositories;

import com.alexhang.credit_card_crud_app.model.CreditCard;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface CreditCardRepository extends MongoRepository<CreditCard,String> {
    public List<CreditCard> findAll();
    public Optional<CreditCard> findById(String id);
    public void deleteById(String id);
}
