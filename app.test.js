const Roman = require('./app')

describe('Roman', () => {

	it('should return II if input is 2', () => {
		// Given
		const input = 2
		const expected = 'II'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return III if input is 3', () => {
		// Given
		const input = 3
		const expected = 'III'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return IV if input is 4', () => {
		// Given
		const input = 4
		const expected = 'IV'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});

    it('should return V if input is 5', () => {
		// Given
		const input = 5
		const expected = 'V'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});

    it('should return IX if input is 9', () => {
		// Given
		const input = 9
		const expected = 'IX'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});

    it('should return XII if input is 12', () => {
		// Given
		const input = 12
		const expected = 'XII'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});

    it('should return XVI if input is 16', () => {
		// Given
		const input = 16
		const expected = 'XVI'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});

    it('should return XXIX if input is 29', () => {
		// Given
		const input = 29
		const expected = 'XXIX'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});

    it('should return XLIV if input is 44', () => {
		// Given
		const input = 44
		const expected = 'XLIV'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});

    it('should return XLIV if input is 45', () => {
		// Given
		const input = 45
		const expected = 'XLV'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});

    it('should return LXVIII if input is 68', () => {
		// Given
		const input = 68
		const expected = 'LXVIII'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});    

    it('should return LXXXIII if input is 83', () => {
		// Given
		const input = 83
		const expected = 'LXXXIII'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});    

    it('should return XCVII if input is 97', () => {
		// Given
		const input = 97
		const expected = 'XCVII'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});    

    it('should return XCIX if input is 99', () => {
		// Given
		const input = 99
		const expected = 'XCIX'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});    

    it('should return CD if input is 400', () => {
		// Given
		const input = 400
		const expected = 'CD'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});    

    it('should return D if input is 500', () => {
		// Given
		const input = 500
		const expected = 'D'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});    

    it('should return DI if input is 501', () => {
		// Given
		const input = 501
		const expected = 'DI'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});    

    it('should return DCXLIX if input is 649', () => {
		// Given
		const input = 649
		const expected = 'DCXLIX'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});        

    it('should return DCCXCVIII if input is 798', () => {
		// Given
		const input = 798
		const expected = 'DCCXCVIII'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});        

    it('should return DCCCXCI if input is 891', () => {
		// Given
		const input = 891
		const expected = 'DCCCXCI'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});        

    it('should return M if input is 1000', () => {
		// Given
		const input = 1000
		const expected = 'M'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});  

    it('should return MIV if input is 1004', () => {
		// Given
		const input = 1004
		const expected = 'MIV'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});  

    it('should return MVI if input is 1006', () => {
		// Given
		const input = 1006
		const expected = 'MVI'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});  

    it('should return MXXIII if input is 1023', () => {
		// Given
		const input = 1023
		const expected = 'MXXIII'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});  

    it('should return MMXIV if input is 2014', () => {
		// Given
		const input = 2014
		const expected = 'MMXIV'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});  

    it('should return MMMCMXCIX if input is 3999', () => {
		// Given
		const input = 3999
		const expected = 'MMMCMXCIX'
		
		// When
		const result = Roman(input) 
		
		// Then
		expect(expected).toBe(result)
	});  

});