-- =============================================
-- PET CARE DATABASE - FULL FIXED SCHEMA
-- =============================================

-- 1. Categories Table
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 2. Subcategories Table
CREATE TABLE IF NOT EXISTS subcategories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    INDEX idx_category_id (category_id)
);

-- 3. Products Table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    sub_category_id INT NOT NULL,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(255),
    popular BOOLEAN DEFAULT FALSE,
    stock INT DEFAULT 0,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    FOREIGN KEY (sub_category_id) REFERENCES subcategories(id) ON DELETE CASCADE,
    INDEX idx_category (category_id),
    INDEX idx_subcategory (sub_category_id),
    INDEX idx_popular (popular),
    INDEX idx_status (status)
);

-- 4. Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- =============================================
-- INSERT CATEGORIES
-- =============================================
INSERT INTO categories (name, slug, description) VALUES
('Shop', 'shop', 'All pet supplies and products'),
('Grooming', 'grooming', 'Professional grooming and boarding services'),
('Vet Care', 'vet-care', 'Veterinary clinic and medical services')
ON DUPLICATE KEY UPDATE 
    name = VALUES(name),
    slug = VALUES(slug),
    description = VALUES(description);

-- =============================================
-- INSERT SUBCATEGORIES
-- =============================================
INSERT INTO subcategories (category_id, name, slug, description) VALUES
-- Shop Subcategories
(1, 'Best Sellers', 'best-sellers', 'Top selling pet products'),
(1, 'Food & Treats', 'food-treats', 'Premium pet food and delicious treats'),
(1, 'Toys & Playtime', 'toys-playtime', 'Fun toys and enrichment items'),
(1, 'Beds & Comfort', 'beds-comfort', 'Cozy beds and comfort accessories'),

-- Grooming Subcategories
(2, 'Grooming & Boarding', 'grooming-boarding', 'Professional grooming and boarding services'),

-- Vet Care Subcategories
(3, 'Wellness Exams', 'wellness-exams', 'Routine health checkups'),
(3, 'Vaccinations', 'vaccinations', 'Vaccination programs and boosters'),
(3, 'Diagnostics', 'diagnostics', 'Laboratory tests and diagnostics'),
(3, 'Dental Care', 'dental-care', 'Professional dental cleaning and care'),
(3, 'In-Clinic Pharmacy', 'in-clinic-pharmacy', 'Medications and prescriptions'),
(3, 'Microchipping', 'microchipping', 'Pet identification and microchipping')
ON DUPLICATE KEY UPDATE 
    name = VALUES(name),
    slug = VALUES(slug),
    description = VALUES(description);

-- =============================================
-- Sample Products (Optional)
-- =============================================
INSERT INTO products (category_id, sub_category_id, name, description, price, stock, popular, image_url) VALUES
(1, 1, 'Premium Dog Food 10kg', 'High quality nutritious dry food for adult dogs', 4500.00, 50, TRUE, '/images/products/dog-food.jpg'),
(1, 2, 'Chicken Flavor Treats', 'Delicious chicken flavored training treats', 850.00, 100, TRUE, '/images/products/treats.jpg'),
(1, 3, 'Interactive Ball Toy', 'Durable bouncing ball toy for dogs', 650.00, 80, FALSE, '/images/products/toy.jpg')
ON DUPLICATE KEY UPDATE 
    name = VALUES(name),
    price = VALUES(price);