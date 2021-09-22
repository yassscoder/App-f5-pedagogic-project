package org.factoriaf5.appf5.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class SecurityController {
    @RequestMapping("/")
    public String getSecurityPage() {
    return "InicioSesion";
}
@RequestMapping("/login")
    public String getLogin(@RequestParam(value ="error", required = false)String error,
                           @RequestParam(value ="logout", required = false)String logout,
                           Model model) {
        model.addAttribute("error", error != null);
        model.addAttribute("logout", logout != null);
        return "login";
    }
}
