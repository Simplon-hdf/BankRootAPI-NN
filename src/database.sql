------------------------------------------------------------
--        Script Postgre 
------------------------------------------------------------



------------------------------------------------------------
-- Table: user
------------------------------------------------------------
CREATE TABLE public.user(
                            id           SERIAL NOT NULL ,
                            name         VARCHAR (50) NOT NULL ,
                            lastname     VARCHAR (50) NOT NULL ,
                            mail         VARCHAR (50) NOT NULL ,
                            password     VARCHAR (250) NOT NULL ,
                            UUID         VARCHAR (250) NOT NULL ,
                            created_at   TIMESTAMP  NOT NULL ,
                            update_at    TIMESTAMP  NOT NULL  ,
                            CONSTRAINT user_PK PRIMARY KEY (id)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Client
------------------------------------------------------------
CREATE TABLE public.Client(
                              id   INT  NOT NULL  ,
                              CONSTRAINT Client_PK PRIMARY KEY (id)

    ,CONSTRAINT Client_user_FK FOREIGN KEY (id) REFERENCES public.user(id)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Admin
------------------------------------------------------------
CREATE TABLE public.Admin(
                             id   INT  NOT NULL  ,
                             CONSTRAINT Admin_PK PRIMARY KEY (id)

    ,CONSTRAINT Admin_user_FK FOREIGN KEY (id) REFERENCES public.user(id)
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
                                   id_Client         INT  NOT NULL ,
                                   id_Bank_Account   INT  NOT NULL  ,
                                   CONSTRAINT Transaction_PK PRIMARY KEY (id)

    ,CONSTRAINT Transaction_Client_FK FOREIGN KEY (id_Client) REFERENCES public.Client(id)
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
                               id_Client      INT  NOT NULL  ,
                               CONSTRAINT Request_PK PRIMARY KEY (id)

    ,CONSTRAINT Request_Client_FK FOREIGN KEY (id_Client) REFERENCES public.Client(id)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Peut gerer
------------------------------------------------------------
CREATE TABLE public.Peut_gerer(
                                  id          INT  NOT NULL ,
                                  id_Client   INT  NOT NULL  ,
                                  CONSTRAINT Peut_gerer_PK PRIMARY KEY (id,id_Client)

    ,CONSTRAINT Peut_gerer_Admin_FK FOREIGN KEY (id) REFERENCES public.Admin(id)
    ,CONSTRAINT Peut_gerer_Client0_FK FOREIGN KEY (id_Client) REFERENCES public.Client(id)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Peut posseder
------------------------------------------------------------
CREATE TABLE public.Peut_posseder(
                                     id          INT  NOT NULL ,
                                     id_Client   INT  NOT NULL  ,
                                     CONSTRAINT Peut_posseder_PK PRIMARY KEY (id,id_Client)

    ,CONSTRAINT Peut_posseder_Bank_Account_FK FOREIGN KEY (id) REFERENCES public.Bank_Account(id)
    ,CONSTRAINT Peut_posseder_Client0_FK FOREIGN KEY (id_Client) REFERENCES public.Client(id)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Peut valider
------------------------------------------------------------
CREATE TABLE public.Peut_valider(
                                    id         INT  NOT NULL ,
                                    id_Admin   INT  NOT NULL  ,
                                    CONSTRAINT Peut_valider_PK PRIMARY KEY (id,id_Admin)

    ,CONSTRAINT Peut_valider_Transaction_FK FOREIGN KEY (id) REFERENCES public.Transaction(id)
    ,CONSTRAINT Peut_valider_Admin0_FK FOREIGN KEY (id_Admin) REFERENCES public.Admin(id)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Traiter
------------------------------------------------------------
CREATE TABLE public.Traiter(
                               id           INT  NOT NULL ,
                               id_Request   INT  NOT NULL  ,
                               CONSTRAINT Traiter_PK PRIMARY KEY (id,id_Request)

    ,CONSTRAINT Traiter_Admin_FK FOREIGN KEY (id) REFERENCES public.Admin(id)
    ,CONSTRAINT Traiter_Request0_FK FOREIGN KEY (id_Request) REFERENCES public.Request(id)
)WITHOUT OIDS;



