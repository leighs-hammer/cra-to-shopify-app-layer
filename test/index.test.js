import run, {grabRelevantAssets} from "../src/index"

describe('Default export exits', () => {

	test('Default function should be inmported', () => {
		expect(run).toBeInstanceOf( Function )
	})
	
})

describe("Methods", () => {
	test('Check the methods are all there', () => {
		// assets grabber
		expect(grabRelevantAssets).toBeInstanceOf( Function )
	})
})