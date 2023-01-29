------------------------------------------------------------
--        Script Postgre
------------------------------------------------------------



------------------------------------------------------------
-- Table: users
------------------------------------------------------------
CREATE TABLE public.user(
                            id           SERIAL NOT NULL ,
                            name         VARCHAR (50) NOT NULL ,
                            lastname     VARCHAR (50) NOT NULL ,
                            mail         VARCHAR (50) NOT NULL ,
                            password     VARCHAR (250) NOT NULL ,
                            UUID         VARCHAR (250) NOT NULL ,
                            isAdmin      BOOL  NOT NULL ,
                            isClient     BOOL  NOT NULL ,
                            created_at   TIMESTAMP  NOT NULL ,
                            update_at    TIMESTAMP  NOT NULL  ,
                            CONSTRAINT user_PK PRIMARY KEY (id)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Bank Account
------------------------------------------------------------
CREATE TABLE public.Bank_Account(
                                    id            SERIAL NOT NULL ,
                                    currency      INT  NOT NULL ,
                                    num_account   INT  NOT NULL ,
                                    created_at    TIMESTAMP  NOT NULL ,
                                    update_at     TIMESTAMP  NOT NULL  ,
                                    CONSTRAINT Bank_Account_PK PRIMARY KEY (id)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Transaction
------------------------------------------------------------
CREATE TABLE public.Transaction(
                                   id                SERIAL NOT NULL ,
                                   amount            INT  NOT NULL ,
                                   state             BOOL  NOT NULL ,
                                   type              VARCHAR (50) NOT NULL ,
                                   created_at        TIMESTAMP  NOT NULL ,
                                   update_at         TIMESTAMP  NOT NULL ,
                                   id_user           INT  NOT NULL ,
                                   id_Bank_Account   INT  NOT NULL  ,
                                   CONSTRAINT Transaction_PK PRIMARY KEY (id)

    ,CONSTRAINT Transaction_user_FK FOREIGN KEY (id_user) REFERENCES public.user(id)
    ,CONSTRAINT Transaction_Bank_Account0_FK FOREIGN KEY (id_Bank_Account) REFERENCES public.Bank_Account(id)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Request
------------------------------------------------------------
CREATE TABLE public.Request(
                               id             SERIAL NOT NULL ,
                               content        VARCHAR (255) NOT NULL ,
                               request_type   VARCHAR (50) NOT NULL ,
                               created_at     TIMESTAMP  NOT NULL ,
                               update_at      TIMESTAMP  NOT NULL ,
                               id_user        INT  NOT NULL  ,
                               CONSTRAINT Request_PK PRIMARY KEY (id)

    ,CONSTRAINT Request_user_FK FOREIGN KEY (id_user) REFERENCES public.user(id)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Peut posseder
------------------------------------------------------------
CREATE TABLE public.Peut_posseder(
                                     id                INT  NOT NULL ,
                                     id_Bank_Account   INT  NOT NULL  ,
                                     CONSTRAINT Peut_posseder_PK PRIMARY KEY (id,id_Bank_Account)

    ,CONSTRAINT Peut_posseder_user_FK FOREIGN KEY (id) REFERENCES public.user(id)
    ,CONSTRAINT Peut_posseder_Bank_Account0_FK FOREIGN KEY (id_Bank_Account) REFERENCES public.Bank_Account(id)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Peut valider
------------------------------------------------------------
CREATE TABLE public.Peut_valider(
                                    id               INT  NOT NULL ,
                                    id_Transaction   INT  NOT NULL  ,
                                    CONSTRAINT Peut_valider_PK PRIMARY KEY (id,id_Transaction)

    ,CONSTRAINT Peut_valider_user_FK FOREIGN KEY (id) REFERENCES public.user(id)
    ,CONSTRAINT Peut_valider_Transaction0_FK FOREIGN KEY (id_Transaction) REFERENCES public.Transaction(id)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Traiter
------------------------------------------------------------
CREATE TABLE public.Traiter(
                               id           INT  NOT NULL ,
                               id_Request   INT  NOT NULL  ,
                               CONSTRAINT Traiter_PK PRIMARY KEY (id,id_Request)

    ,CONSTRAINT Traiter_user_FK FOREIGN KEY (id) REFERENCES public.user(id)
    ,CONSTRAINT Traiter_Request0_FK FOREIGN KEY (id_Request) REFERENCES public.Request(id)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Peut gerer
------------------------------------------------------------
CREATE TABLE public.Peut_gerer(
                                  id        INT  NOT NULL ,
                                  id_user   INT  NOT NULL  ,
                                  CONSTRAINT Peut_gerer_PK PRIMARY KEY (id,id_user)

    ,CONSTRAINT Peut_gerer_Bank_Account_FK FOREIGN KEY (id) REFERENCES public.Bank_Account(id)
    ,CONSTRAINT Peut_gerer_user0_FK FOREIGN KEY (id_user) REFERENCES public.user(id)
)WITHOUT OIDS;



