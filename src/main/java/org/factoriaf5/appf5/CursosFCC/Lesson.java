package org.factoriaf5.appf5.CursosFCC;

import javax.persistence.*;


    @Entity
    @Table(name = "lesson")

    public class Lesson {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String name;
        private String fcc_id;

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getFcc_id() { return fcc_id; }

        public void setFcc_id(String fcc_id) { this.fcc_id = fcc_id; }

    public Lesson (Long id, String name, String fcc_id) {
        this.id = id;
        this.name = name;
        this.fcc_id = fcc_id;

    }
    public Lesson (){
        }


    }