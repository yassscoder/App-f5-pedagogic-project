package org.factoriaf5.appf5.service;

import java.util.List;

public class LessonIdService {
    public boolean isSelectedLesson(String id){
        List <String> selectedIds = List.of("56533eb9ac21ba0edf2244a8", "bd7123c9c441eddfaeb4bdef"); //lista ejercicios


        return
                selectedIds.contains(id);
    }
}