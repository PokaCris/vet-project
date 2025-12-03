CREATE TABLE IF NOT EXISTS appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    pet_info TEXT NULL,
    comment TEXT NULL,
    agreed_to_terms BOOLEAN DEFAULT FALSE,
    status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO appointments (name, phone, pet_info, agreed_to_terms, status) VALUES
('Иван Петров', '+7 (999) 123-45-67', 'Кот Барсик, 3 года', TRUE, 'pending'),
('Мария Сидорова', '+7 (888) 987-65-43', 'Собака Шарик, 5 лет', TRUE, 'confirmed');